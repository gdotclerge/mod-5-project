# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


thugnanny = Photographer.create(
  username: "thugnanny",
  website: "http://www.denissebenitez.co/",
  profile_photo: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed6f68165f58c217d3189/1513019145997/self.png?format=500w"
)

pic = thugnanny.photos.build(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed9768165f58c217dbe76/1513019808003/IMG_1700.JPG?format=500w")
pic2 = thugnanny.photos.build(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed662c83025e9c486290a/1513019086951/IMG_5725.JPG?format=500w")
pic.save
pic2.save


package = thugnanny.packages.build(price: 100.00, photos_to_deliver: "10 - 20")
package.save


Tag.create(name: "Fashion Blogger")
PhotoTag.create(tag_id: 1, photo_id: 1)
PhotoTag.create(tag_id: 1, photo_id: 2)
PackageTag.create(tag_id: 1, package_id: 1)
