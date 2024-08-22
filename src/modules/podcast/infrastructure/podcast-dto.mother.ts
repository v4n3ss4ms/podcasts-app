import { PodcastDto } from './podcast-dto.ts'

export class PodcastDtoMother {
  static getAll(): PodcastDto[] {
    return [
      {
        'im:name': {
          label: 'The Joe Budden Podcast',
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        title: {
          label: 'The Joe Budden Podcast - The Joe Budden Network',
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
          attributes: { 'im:id': '1535809341' },
        },
        'im:artist': {
          label: 'The Joe Budden Network',
          attributes: {
            href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
          },
        },
        summary: {
          label:
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
        },
      },
      {
        'im:name': {
          label: 'R&B Money',
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/06/72/c9/0672c949-e262-23b2-8c29-3db1def67d20/mza_4917860291183321531.jpg/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        title: {
          label: 'R&B Money - The Black Effect and iHeartPodcasts',
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/r-b-money/id1623212249?uo=2',
          attributes: { 'im:id': '1623212249' },
        },
        'im:artist': {
          label: 'The Black Effect and iHeartPodcasts',
        },
        summary: {
          label: `R&B Money Podcast is hosted by the Legendary Grammy Award winning R&B singer/songwriter/producer TANK and his business partner multi-platinum songwriter & executive J. Valentine. This podcast is for the super dedicated R&B fans, covering everything from Keith Sweat to Pink Sweat$. R&B Money has created a fly space for artist & executives in the game to reminisce, with exceptional compelling story telling and a place of discovery for the fans.`,
        },
      },
      {
        'im:name': {
          label: 'Friday Night Karaoke',
        },
        'im:image': [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/55x55bb.png',
            attributes: { height: '55' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/60x60bb.png',
            attributes: { height: '60' },
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/75/6f/21/756f219f-111f-b47f-48e5-f39946e643bf/mza_12168793512556367093.jpg/170x170bb.png',
            attributes: { height: '170' },
          },
        ],
        title: {
          label: 'Friday Night Karaoke - Friday Night Karaoke',
        },
        id: {
          label: 'https://podcasts.apple.com/us/podcast/friday-night-karaoke/id1574029840?uo=2',
          attributes: { 'im:id': '1574029840' },
        },
        'im:artist': { label: 'Friday Night Karaoke' },
        summary: {
          label:
            'Nora Princiotti and Nathan Hubbard are two pop music enthusiasts. Together, they break down every single album from some of your favorite stars, like Taylor Swift, Adele, and Harry Styles. Topics include favorite collaborators, track five meanings, where these artists get their inspiration, and more.',
        },
      },
    ]
  }
}
