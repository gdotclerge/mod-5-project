class PhotographerSerializer < ActiveModel::Serializer
  attributes :id, :username, :website, :profile_photo, :instagram_url, :facebook_url, :custom_url, :booked_photo_sessions, :open_photo_sessions

  has_many :packages
  has_many :photos
end
