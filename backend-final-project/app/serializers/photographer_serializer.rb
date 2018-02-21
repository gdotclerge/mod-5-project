class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :username, :website, :profile_photo, :instagram_url, :facebook_url

  has_many :photos
  has_many :packages
end
