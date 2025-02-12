export type SwimmingRowData = {
    title: string
    description: string
    imagePath: string
    altImageText: string
    linkText: string
    link: string
}

export const swimmingCardData: SwimmingRowData[] = [
    {
        title: 'Overview',
        description:
            "My swimming career spanned 11 years and ranged 4 different teams. For the more elite portion of my swimming career (2012 -2018) I spent 20 hours a week training. While swimming kept me in fantastic health and fitness it's main rewards were the friends I made and the mental strategies I gained. I learned that my peak mental health occurs around 150 heart rate.",
        imagePath: '/swimming/youngswimmer.jpg',
        altImageText: 'Young swimmer',
        linkText: 'Swimming Stats',
        link: 'https://www.swimcloud.com/swimmer/234062/'
    },
    {
        title: 'Winter Nationals 2015',
        description:
            'Competed at the 2015 AT&T Winter National Championships in Federal Way, WA. Raced the 200 Yard Butterfly and placed 23rd inthe nation. Raced against Michael Phelps who placed 1st. When I was swimming in the warm down pool I saw a bunch of moms leaning over the railing with sharpies, but it was at this point that I realized I was warming up in Michael Phelps lane. His feet were massive. I was only 5.67 seconds behind the 23 time Olympic gold medal champion.',
        imagePath: '/swimming/calpoly1.webp',
        altImageText: 'Cal Poly Swimming in water',
        linkText: 'Meet Results',
        link: 'https://websitedevsa.blob.core.windows.net/sitefinity/docs/default-source/eventsdocuments/meet-results/2015-att-winter-nationals/winter-nats-complete_results_book.pdf'
    },
    {
        title: 'Cal Poly 200 Butterfly School Record',
        description:
            'At the mid-season championship meet I swam the school record for the 200 Yard Butterfly. My parents were there and it was really awesome.',
        imagePath: '/swimming/calpoly2.jpg',
        altImageText: 'Cal Poly Swimming on blocks',
        link: 'https://gopoly.com/news/2015/11/22/11_22_2015_5533.aspx',
        linkText: 'Read Article'
    },
    {
        title: "Swimming's Gift",
        description:
            "No one will remember the times you went, but everyone will remember how you made them feel. Here's to all the life long friends I made along the way.",
        imagePath: '/swimming/swimmingfriends.webp',
        altImageText: 'Swimming friends',
        link: 'https://gopoly.com/sports/swimming-and-diving/roster/2017-18',
        linkText: 'Team Roster'
    }
]
