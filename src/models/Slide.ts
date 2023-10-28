class Slide {
  image: string;
  caption: string;
  id: string;
  resize: boolean;
  paragraphs: string[];

  constructor(
    id: string,
    image: string,
    caption: string,
    paragraphs: string[] = [],
    resize: boolean = false,
  ) {
    this.id = id;
    this.image = image;
    this.caption = caption;
    this.resize = resize;
    this.paragraphs = paragraphs;
  }
}

export default Slide;
