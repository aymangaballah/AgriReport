export class Place {
  constructor(title, imageUri,location,comment) {
    this.title = title;
    this.imageUri = imageUri;
    this.location = location;
    this.comment = comment;
    this.id = new Date().toString() + Math.random().toString();
  }
}
