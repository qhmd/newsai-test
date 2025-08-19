interface Title {
    url: string
    title: string
}

interface TimePub {
    pub_date: string
}

interface ImageCus {
    url?: string;
    caption?: string
}

interface NewsItem {
    id: number;
    web_url: string;
    pub_date: string;
    headline: {
        main: string;
    };
    multimedia?: {
        default?: {
            url? : string
        };
        caption?: string
    };
}


interface NewsDefault {
  id: string;
  title: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
}
