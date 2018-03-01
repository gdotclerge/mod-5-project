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

User.create(username: "Charmander", password: "hello")
User.create(username: "Garry", password: "hello")

thugnanny.photo_sessions.create(date: Date.new(2018,7,10), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,20), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,30), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,11), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,22), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,12), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,13), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,14), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,16), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,18), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,19), notes: "THUGTASTIC NOTES")
thugnanny.photo_sessions.create(date: Date.new(2018,7,21), notes: "THUGTASTIC NOTES")


thugpic1 = thugnanny.photos.build(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed9768165f58c217dbe76/1513019808003/IMG_1700.JPG?format=500w")
thugpic2 = thugnanny.photos.build(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed662c83025e9c486290a/1513019086951/IMG_5725.JPG?format=500w")


dclive.photo_sessions.create(date: Date.new(2018,7,10), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,20), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,30), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,11), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,22), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,12), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,13), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,14), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,16), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,18), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,19), notes: "WE CLIVE NOTES")
dclive.photo_sessions.create(date: Date.new(2018,7,21), notes: "WE CLIVE NOTES")


dclivepic1 = dclive.photos.build(img_src: "http://www.dorianclive.com/wp-content/uploads/2015/05/MG_8234-Edit-2-853x1280.jpg")
dclivepic2 = dclive.photos.build(img_src: "http://www.dorianclive.com/wp-content/uploads/2015/06/MG_7695-Edit-853x1280.jpg")



package1 = thugnanny.packages.create(price: 175.00, photos_to_deliver: "8 - 10", hours: 1) #1 blogger
package2 = thugnanny.packages.create(price: 500.00, photos_to_deliver: "10 - 15", hours: 2) #1 portrait
package3 = thugnanny.packages.create(price: 600.00, photos_to_deliver: "20 - 30", hours: 2) #1 portrait

package4 = dclive.packages.create(price: 300.00, photos_to_deliver: "8 - 10", hours: 1) # fashion
package5 = dclive.packages.create(price: 500.00, photos_to_deliver: "10 - 20", hours: 2) #1 fashion
package6 = dclive.packages.create(price: 600.00, photos_to_deliver: "20 - 30", hours: 2) #1 engagement





# list of tags

blogger = Tag.create(name: "Blogger")
portrait = Tag.create(name: "Portrait")
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


thugpic1.tag = blogger
thugpic1.save

thugpic2.tag = blogger
thugpic2.save

dclivepic1.tag = fashion
dclivepic1.save

dclivepic2.tag = fashion
dclivepic2.save



# thugnanny 1 2 3
# 1 for Blogger
# 2 and 3 for Portrait and Engagement

#dclive 456
# 1 and 2 for Fashion
# 3 for Engagement and Portrait

PackageTag.create(tag_id: blogger.id, package_id: package1.id)
PackageTag.create(tag_id: portrait.id, package_id: package2.id)
PackageTag.create(tag_id: engagement.id, package_id: package2.id)
PackageTag.create(tag_id: portrait.id, package_id: package3.id)
PackageTag.create(tag_id: engagement.id, package_id: package3.id)
PackageTag.create(tag_id: fashion.id, package_id: package4.id)
PackageTag.create(tag_id: fashion.id, package_id: package5.id)
PackageTag.create(tag_id: engagement.id, package_id: package6.id)
PackageTag.create(tag_id: portrait.id, package_id: package6.id)
