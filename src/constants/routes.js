export const routes = {
  home: '/',
  podcast: '/podcast/:podcastId',
  episode: '/podcast/:podcastId/episode/:episodeId',
  topPodcasts: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  prefixURL: 'https://cors-anywhere.herokuapp.com/',
  podcastEpisodes: 'https://itunes.apple.com/lookup?id={podcastId}&country=US&media=podcast&entity=podcastEpisode',
}
