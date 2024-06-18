export interface InitialState{
    videos: HomePageVideeos[];
    currentPlaying: CurrentPlaying | null;
    SearchTerm: string,
    searchResults:[];
    nextPageToken: string|null;
    recommendedVideos: RecommendedVideos[];
}
export interface HomePageVideeos   {}
export interface CurrentPlaying    {}
export interface RecommendedVideos {}
