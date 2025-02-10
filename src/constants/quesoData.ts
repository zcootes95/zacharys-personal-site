type QuesoData = {
    ranking: number
    name: string
    description: string
    imagePath: string
    imageAlt: string
    link: string
}

export const quesoData: QuesoData[] = [
    {
        ranking: 1,
        name: 'Torchies Tacos',
        description:
            'The premire queso standard. I once bought 4 tubs of this and froze them to take them on a plane to CA in order for my friends to try. This queso has spice, zest, and a savory satisfaction that scratches the queso itch every time.',
        imagePath: '/queso/torchies.jpg',
        imageAlt: 'Torchies Tacos',
        link: 'https://torchystacos.com/food/green-chili-queso-and-chips/'
    },
    {
        ranking: 2,
        name: 'H-E-B',
        description:
            'Always stocked when I go back home to Austin and enjoyed upon arrival, even if I happen to arrive at midnight ( Midnight Queso has happened on several occasions ). Pair this with the H-E-B brand tortilla chips for the perfect crunch. This queso is unstoppable and elevates family game nights to the max.',
        imagePath: '/queso/heb.jpg',
        imageAlt: 'H-E-B Queso',
        link: 'https://www.heb.com/product-detail/h-e-b-queso-blanco-dip-mild/2088337'
    },
    {
        ranking: 3,
        name: 'Maudies',
        description:
            "This Tex-Mex resurant is a sleeper because their queso comes in small porition but hits soo good that it lands it number 3 on the list. While you may have to order 2 or 3, the queso base makes this queso stand out. This is more of a milder option for those who can't handle a little heat",
        imagePath: '/queso/maudies.jpg',
        imageAlt: 'Maudies Queso',
        link: 'https://www.maudies.com/'
    },
    {
        ranking: 4,
        name: 'Kerby Lane Cafe',
        description:
            "Once you develop a true pallete for queso you'll stop seeing the breakfast / lunch / dinner boundary that some have for queso. Kerby lane is a fantastic spot to add queso to your breakfast meal. While this queso has less add-ins, the texture, smoothness, and overall flavor make it a top contender. I'm not the biggest fan of Kerby Lane's breakfast but the queso makes it a worthwile place to vist and take friends too.",
        imagePath: '/queso/kerbylane.jpg',
        imageAlt: 'Kerby Lane Cafe Queso',
        link: 'https://kerbeylanecafe.com/queso'
    },
    {
        ranking: 5,
        name: "Chuy's",
        description:
            "Rounding out the top 5 is a fan favorite. The Chuy's queso is served in a shallow bowl and has meat, guac, and pico added in. You're going to want to mix this bad boy up before digging in and you won't regret it. The large size makes it so you'll probably fill up before you meal gets there but I've never once regretted it.",
        imagePath: '/queso/chuys.jpg',
        imageAlt: "Chuy's Queso",
        link: 'https://www.chuys.com/menu/food'
    }
]
