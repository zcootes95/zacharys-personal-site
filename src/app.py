# backend/app.py
from flask import Flask, request, jsonify
from PIL import Image
import io

app = Flask(__name__)

def image_to_ascii(image, width=100):
    aspect_ratio = image.height / image.width
    new_height = int(width * aspect_ratio * 0.55)
    image = image.resize((width, new_height)).convert('L')
    ascii_chars = "@%#*+=-:. "
    pixels = image.getdata()
    ascii_str = ''.join(ascii_chars[pixel * len(ascii_chars) // 256] for pixel in pixels)
    ascii_art = "\n".join(ascii_str[i:i+width] for i in range(0, len(ascii_str), width))
    return ascii_art

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    file = request.files['file']
    try:
        image = Image.open(file.stream)
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    ascii_art = image_to_ascii(image)
    return jsonify({'ascii_art': ascii_art})

if __name__ == '__main__':
    app.run(debug=True)
