blogger = Tag.create(name: "Blogger")
portrait = Tag.create(name: "Portrait")
fashion = Tag.create(name: "Fashion")
wedding = Tag.create(name: "Wedding")
new_born = Tag.create(name: "New Born")
engagement = Tag.create(name: "Engagement")
kids = Tag.create(name: "Kids")
family = Tag.create(name: "Family")
headshot = Tag.create(name: "Headshots")
boudoir = Tag.create(name: "Boudoir")
sports = Tag.create(name: "Sports")
event = Tag.create(name: "Events")
maternity = Tag.create(name: "Maternity")
pets = Tag.create(name: "Pets")



thugnanny = Photographer.create(
  username: "thugnanny",
  password: "hello",
  website: "http://www.denissebenitez.co/",
  profile_photo: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed6f68165f58c217d3189/1513019145997/self.png?format=500w",
  custom_url: "thugnanny"
)

thugnanny.photo_sessions.create(start_date: "3/9/2018, 12:00:00 AM", end_date: "3/9/2018, 12:00:00 AM")

# i = 2
#
# 20.times do
#   thugnanny.photo_sessions.create(start_date: `4/#{i}/2018, 12:00:00 AM`, end_date: `4/#{i}/2018, 12:00:00 AM`)
#   i++
# end

thugP1 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed9768165f58c217dbe76/1513019808003/IMG_1700.JPG?format=500w") #blogger
thugP2 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5a2ed662c83025e9c486290a/1513019086951/IMG_5725.JPG?format=500w") #blogger
thugP3 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/58681afde4fcb5e16887fa69/1483217692733/?format=500w") #family
thugP4 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aab8759cc688787c86ec2/1483385766372/?format=500w") #kids
thugP5 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/58681bbfff7c505afd2b7794/1483217931509/?format=500w") #kids
thugP6 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/5868233aff7c505afd2bc33a/1483219810533/?format=500w") #maternity
thugP7 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aa3a8e58c624be9e6a31f/1483383753896/?format=500w") #maternity
thugP8 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/58682163cd0f68dbbf5b8041/1483219428359/?format=500w") #maternity
thugP9 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aa76e9de4bb268237a0fb/1483384719645/?format=500w") #maternity
thugP10 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aa5d22e69cfdbc235d07d/1483384303043/?format=500w") #family
thugP11 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aa74015d5db01822b285f/1483384668515/?format=500w") #maternity
thugP12 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aad9259cc688787c8932b/1483386279225/?format=500w") #new-born
thugP13 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586ad67df5e231abffed9d58/1483396789603/?format=500w") #family
thugP14 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586aa62f59cc688787c80ff4/1483384415111/?format=500w") #kids
thugP15 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586ab70546c3c4f91f93c6e6/1483388702469/?format=750w") #portrait
thugP16 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586acee5e3df2872ac5ae04a/1483394832143/?format=750w") #portrait
thugP17 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586ad4b76b8f5b6deb26891f/1483396307772/?format=750w") #portrait
thugP18 = thugnanny.photos.create(img_src: "https://static1.squarespace.com/static/54465cf1e4b09d4e92ebfe2d/t/586ab2b66b8f5b6deb2404db/1483387613300/?format=750w") #blogger

thugPK1 = thugnanny.packages.create(price: 175.00, min_photos: 8, max_photos: 10, hours: 1.2, notes: "turn around time is 5-7 business days and travel fee applied if necessary") #1 blogger
thugPK2 = thugnanny.packages.create(price: 500.00, min_photos: 10, max_photos: 15, hours: 2.0, notes: "turn around time is 8-12 business days, includes two looks, valid for one person") #1 portrait
thugPK3 = thugnanny.packages.create(price: 575.00, min_photos: 20, max_photos: 35, hours: 2.0, notes: "turn around time is 8-12 business days") #1 family
thugPK4 = thugnanny.packages.create(price: 600.00, min_photos: 20, max_photos: 30, hours: 1.0, notes: "includes one look") #1 engagement
thugPK5 = thugnanny.packages.create(price: 950.00, min_photos: 20, max_photos: 30, hours: 2.0, notes: "includes two looks") #1 engagement
thugPK6 = thugnanny.packages.create(price: 3800.00, min_photos: 300, max_photos: 1000, hours: 6, notes: "includes engagement session") #1 wedding
thugPK7 = thugnanny.packages.create(price: 4800.00, min_photos: 300, max_photos: 1000, hours: 8, notes: "includes 2nd shooter, engagement session" ) #1 wedding
thugPK8 = thugnanny.packages.create(price: 6700.00, min_photos: 300, max_photos: 1000, hours: 12, notes: "includes 2nd shooter, bridal session, engagement session" ) #1 wedding

thugP1.tag = blogger
thugP2.tag = blogger
thugP3.tag = family
thugP4.tag = kids
thugP5.tag = kids
thugP6.tag = maternity
thugP7.tag = maternity
thugP8.tag = maternity
thugP9.tag = maternity
thugP10.tag = family
thugP11.tag = maternity
thugP12.tag = new_born
thugP13.tag = family
thugP14.tag = kids
thugP15.tag = portrait
thugP16.tag = portrait
thugP17.tag = portrait
thugP18.tag = blogger
thugP1.save
thugP2.save
thugP3.save
thugP4.save
thugP5.save
thugP6.save
thugP7.save
thugP8.save
thugP9.save
thugP10.save
thugP11.save
thugP12.save
thugP13.save
thugP14.save
thugP15.save
thugP16.save
thugP17.save
thugP18.save

PackageTag.create(tag_id: blogger.id, package_id: thugPK1.id)
PackageTag.create(tag_id: portrait.id, package_id: thugPK2.id)
PackageTag.create(tag_id: family.id, package_id: thugPK3.id)
PackageTag.create(tag_id: engagement.id, package_id: thugPK4.id)
PackageTag.create(tag_id: engagement.id, package_id: thugPK5.id)
PackageTag.create(tag_id: wedding.id, package_id: thugPK6.id)
PackageTag.create(tag_id: wedding.id, package_id: thugPK7.id)
PackageTag.create(tag_id: wedding.id, package_id: thugPK8.id)









# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids
# thugP14 = thugnanny.photos.create(img_src: "") #kids

#MIND STATE MEDIA

msm = Photographer.create(
  username: "mindstate",
  password: "hello",
  website: "http://www.mindstatemedia.net/index.html#home",
  profile_photo: "http://www.mindstatemedia.net/images/self.jpg?crc=178469450",
  custom_url: "mindstatemedia"
)

msmP1 = msm.photos.create(img_src: "https://static1.squarespace.com/static/559738a0e4b0d1b573ecb277/57a7bd6a59cc6810b81fd2dc/5a5595fe53450a0fe1b31729/1515558408206/852811_852804_FUR_POCKET_COAT-CUDDLY_BEAR_COAT_113_WIP_W.jpg?format=750w") #kids
msmP5 = msm.photos.create(img_src: "http://www.mindstatemedia.net/images/miles302.jpg?crc=285875275") #kids
msmP6 = msm.photos.create(img_src: "http://www.mindstatemedia.net/images/luciano%20142.jpg?crc=432730985") #kids

msmP1.tag = kids
msmP5.tag = kids
msmP6.tag = kids

msmP1.save
msmP5.save
msmP6.save

msm.photo_sessions.create(start_date: "3/9/2018, 12:00:00 AM", end_date: "3/9/2018, 12:00:00 AM")

msmPK1 = msm.packages.create(price: 275.00, min_photos: 8, max_photos: 10, hours: 1.2, notes: "turn around time is 5-7 business days") #1 blogger
msmPK2 = msm.packages.create(price: 400.00, min_photos: 10, max_photos: 15, hours: 2.0, notes: "turn around time is 8-12 business days") #1 portrait
msmPK3 = msm.packages.create(price: 575.00, min_photos: 20, max_photos: 35, hours: 2.0, notes: "turn around time is 8-12 business days") #1 family

PackageTag.create(tag_id: kids.id, package_id: msmPK1.id)
PackageTag.create(tag_id: kids.id, package_id: msmPK2.id)
PackageTag.create(tag_id: kids.id, package_id: msmPK3.id)
PackageTag.create(tag_id: wedding.id, package_id: msmPK1.id)
PackageTag.create(tag_id: wedding.id, package_id: msmPK2.id)
PackageTag.create(tag_id: wedding.id, package_id: msmPK3.id)
PackageTag.create(tag_id: maternity.id, package_id: msmPK1.id)
PackageTag.create(tag_id: maternity.id, package_id: msmPK2.id)
PackageTag.create(tag_id: maternity.id, package_id: msmPK3.id)


# JESSE

jesse = Photographer.create(
  username: "jessefreidin",
  password: "hello",
  website: "https://www.jessefreidin.com/",
  profile_photo: "https://static1.squarespace.com/static/567310d3bfe8739f7afbf371/t/568197fbcbced6ee83cf610e/1451333628887/?format=500w",
  custom_url: "jessefreidin"
)

jfP3 = jesse.photos.create(img_src: "https://static1.squarespace.com/static/567310d3bfe8739f7afbf371/5677094bd82d5eb8ca9dfccb/567860cbdf40f3876ba8093d/1459450261449/LA_dog_photographer2.jpg?format=750w") #pets

jfPK1 = jesse.packages.create(price: 275.00, min_photos: 8, max_photos: 10, hours: 1.2, notes: "turn around time is 5-7 business days") #1 blogger
jfPK2 = jesse.packages.create(price: 400.00, min_photos: 10, max_photos: 15, hours: 2.0, notes: "turn around time is 8-12 business days") #1 portrait
jfPK3 = jesse.packages.create(price: 575.00, min_photos: 20, max_photos: 35, hours: 2.0, notes: "turn around time is 8-12 business days") #1 family

jfP3.tag = pets
jfP3.save

PackageTag.create(tag_id: pets.id, package_id: jfPK1.id)
PackageTag.create(tag_id: pets.id, package_id: jfPK2.id)
PackageTag.create(tag_id: pets.id, package_id: jfPK3.id)

jesse.photo_sessions.create(start_date: "3/9/2018, 12:00:00 AM", end_date: "3/9/2018, 12:00:00 AM")

# JULIE

# julie = Photographer.create(
#   username: "juliemark",
#   password: "hello",
#   website: "https://juliemark.com/",
#   profile_photo: "https://static1.squarespace.com/static/57d77fb2f7e0ab046f20a3d3/t/5981caf4be6594bd65da2ac6/1501758305434/?format=500w",
#   custom_url: "juliemark"
# )
#
# jmP1 = julie.photos.create(img_src: "https://static1.squarespace.com/static/57d77fb2f7e0ab046f20a3d3/596af14be6f2e1d4b2f23c49/5a890d05f9619a07523f6e53/1518966672450/Newborn_42.jpg?format=500w") #newborn
# jmP1.tag = pets
# jmP1.save
#
# jmPK1 = julie.packages.create(price: 275.00, min_photos: 8, max_photos: 10, hours: 1.2, notes: "turn around time is 5-7 business days") #1 blogger
# jmPK2 = julie.packages.create(price: 400.00, min_photos: 10, max_photos: 15, hours: 2.0, notes: "turn around time is 8-12 business days") #1 portrait
# jmPK3 = julie.packages.create(price: 575.00, min_photos: 20, max_photos: 35, hours: 2.0, notes: "turn around time is 8-12 business days") #1 family
#
# PackageTag.create(tag_id: new_born.id, package_id: jmPK1.id)
# PackageTag.create(tag_id: new_born.id, package_id: jmPK2.id)
# PackageTag.create(tag_id: new_born.id, package_id: jmPK3.id)
#
# julie.photo_sessions.create(start_date: "3/9/2018, 12:00:00 AM", end_date: "3/9/2018, 12:00:00 AM")

# DORIAN

dclive = Photographer.create(
  username: "dorianclive",
  password: "hello",
  website: "http://www.dorianclive.com/",
  profile_photo: "http://www.dorianclive.com/wp-content/uploads/2015/05/about-1273x854.jpg",
  custom_url: "dorianclive"
)

User.create(username: "Charmander", password: "hello")
User.create(username: "Garry", password: "hello")




dclive.photo_sessions.create()
dclive.photo_sessions.create()

dclivepic1 = dclive.photos.create(img_src: "http://www.dorianclive.com/wp-content/uploads/2015/05/MG_8234-Edit-2-853x1280.jpg")
dclivepic2 = dclive.photos.create(img_src: "http://www.dorianclive.com/wp-content/uploads/2015/06/MG_7695-Edit-853x1280.jpg")

package4 = dclive.packages.create(price: 300.00,  hours: 1) # fashion
package5 = dclive.packages.create(price: 500.00,  hours: 2) #1 fashion
package6 = dclive.packages.create(price: 600.00,  hours: 2) #1 engagement

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

PackageTag.create(tag_id: fashion.id, package_id: package4.id)
PackageTag.create(tag_id: fashion.id, package_id: package5.id)
PackageTag.create(tag_id: engagement.id, package_id: package6.id)
PackageTag.create(tag_id: portrait.id, package_id: package6.id)
