export type BadgeName =
    | 'Developer'
    | 'Traveler'
    | 'Cyclist'
    | 'Inventor'
    | 'Explorer'
    | 'Friend'
    | 'Comedian'
    | 'Water Tester'
    | 'Pacifist'
    | 'Origami Folder'
    | 'Curry Lover'
    | 'Sun Craver'
    | 'Ideator'
    | 'Early Bird'
    | 'Music Appreciator'

export const badgeThemes: Record<BadgeName, string> = {
    Developer: 'bg-white',
    Inventor: 'bg-yellow-300',
    'Early Bird': 'bg-green-300',
    Cyclist: 'bg-red-300',
    Traveler: 'bg-purple-300',
    Explorer: 'bg-pink-300',
    Friend: 'bg-blue-500',
    Comedian: 'bg-yellow-500',
    'Water Tester': 'bg-green-500',
    Pacifist: 'bg-red-500',
    'Origami Folder': 'bg-purple-500',
    'Curry Lover': 'bg-pink-500',
    'Sun Craver': 'bg-yellow-200',
    Ideator: 'bg-blue-200',
    'Music Appreciator': 'bg-red-200'
}
export const badges = Object.keys(badgeThemes) as BadgeName[]
