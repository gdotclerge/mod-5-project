# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


thugnanny = Photographer.create(
  username: "thugnanny",
  password: "hello",
  website: "http://www.denissebenitez.co/",
  profile_photo: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed6f68165f58c217d3189/1513019145997/self.png?format=500w",
  custom_url: "thugnanny"
)

dclive = Photographer.create(
  username: "dclive",
  password: "hello",
  website: "http://www.dorianclive.com/",
  profile_photo: "http://www.dorianclive.com/wp-content/uploads/2015/05/about-1273x854.jpg",
  custom_url: "dorianclive"
)

thugpic1 = thugnanny.photos.build(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed9768165f58c217dbe76/1513019808003/IMG_1700.JPG?format=500w")
thugpic2 = thugnanny.photos.build(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed662c83025e9c486290a/1513019086951/IMG_5725.JPG?format=500w")


dclivepic1 = dclive.photos.build(img_src: "http://www.dorianclive.com/wp-content/uploads/2015/05/MG_8234-Edit-2-853x1280.jpg")
dclivepic2 = dclive.photos.build(img_src: "http://www.dorianclive.com/wp-content/uploads/2015/06/MG_7695-Edit-853x1280.jpg")



package = thugnanny.packages.build(price: 100.00, photos_to_deliver: "10 - 20")
package.save
package1 = dclive.packages.build(price: 100.00, photos_to_deliver: "10 - 20")
package1.save


# list of tags

blogger = Tag.create(name: "Blogger")
lifestyle = Tag.create(name: "Lifestyle")
glamour = Tag.create(name: "Glamour")
travel = Tag.create(name: "Travel")
food = Tag.create(name: "Food")
fashion = Tag.create(name: "Fashion")
wedding = Tag.create(name: "Wedding")
new_born = Tag.create(name: "New Born")
birth = Tag.create(name: "Birth")
engagement = Tag.create(name: "Engagement")
kids = Tag.create(name: "Kids")
babies = Tag.create(name: "Babies")
family = Tag.create(name: "Family")
headshot = Tag.create(name: "Headshot")
product = Tag.create(name: "Product")
portrait = Tag.create(name: "Portrait")
boudoir = Tag.create(name: "Boudoir")
social = Tag.create(name: "Social")
surfing = Tag.create(name: "Surfing")

Tag.create(name: "Landscape")
Tag.create(name: "Wildlife")
Tag.create(name: "Aerial")
Tag.create(name: "Action")
Tag.create(name: "Sports")
Tag.create(name: "Pets")
Tag.create(name: "Event")
Tag.create(name: "Real Estate")
Tag.create(name: "Architecture")
Tag.create(name: "Journalism")
Tag.create(name: "Musical Concert")
Tag.create(name: "Macro")
Tag.create(name: "Medical")
Tag.create(name: "Aerial")


thugpic1.tags << blogger
thugpic1.tags << fashion
thugpic1.tags << portrait
thugpic1.save

thugpic2.tags << blogger
thugpic2.tags << fashion
thugpic2.tags << portrait
thugpic2.save

dclivepic1.tags << fashion
dclivepic1.tags << portrait
dclivepic1.save

dclivepic2.tags << fashion
dclivepic2.tags << portrait
dclivepic2.save


PackageTag.create(tag_id: 1, package_id: 1)
