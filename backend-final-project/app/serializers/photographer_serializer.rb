class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :username, :website, :profile_photo, :instagram_url, :facebook_url, :custom_url

  has_many :packages
  has_many :photos
  has_many :photo_sessions
end
