class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :username, :website, :profile_photo, :instagram_url, :facebook_url

  has_many :packages
  has_many :photos
end
