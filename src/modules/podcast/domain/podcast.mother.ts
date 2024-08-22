import { Podcast } from './podcast.ts'

export class PodcastMother {
  static getAll(): Podcast[] {
    return [
      {
        podcastId: '1535809341',
        title: 'The Joe Budden Podcast',
        author: 'The Joe Budden Network',
        image: `https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png`,
        searchTags: [
          'The Joe Budden Podcast - The Joe Budden Network',
          'The Joe Budden Network',
        ],
        summary:
          'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
      },
      {
        podcastId: '1623212249',
        title: 'R&B Money',
        author: 'The Black Effect and iHeartPodcasts',
        image:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png',
        searchTags: [
          'R&B Money - The Black Effect and iHeartPodcasts',
          'The Black Effect and iHeartPodcasts',
        ],
        summary: `R&B Money Podcast is hosted by the Legendary Grammy Award winning R&B singer/songwriter/producer TANK and his business partner multi-platinum songwriter & executive J. Valentine. This podcast is for the super dedicated R&B fans, covering everything from Keith Sweat to Pink Sweat$. R&B Money has created a fly space for artist & executives in the game to reminisce, with exceptional compelling story telling and a place of discovery for the fans.`,
      },
      {
        podcastId: '1574029840',
        title: 'Friday Night Karaoke',
        author: 'Friday Night Karaoke',
        image:
          'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/170x170bb.png',
        searchTags: [
          'Friday Night Karaoke - Friday Night Karaoke',
          'Friday Night Karaoke',
        ],
        summary:
          'Nora Princiotti and Nathan Hubbard are two pop music enthusiasts. Together, they break down every single album from some of your favorite stars, like Taylor Swift, Adele, and Harry Styles. Topics include favorite collaborators, track five meanings, where these artists get their inspiration, and more.',
      },
    ]
  }
}
