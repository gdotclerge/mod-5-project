class Photographer < ApplicationRecord
  has_many :packages
  has_many :photos
  has_many :photo_sessions
  has_many :users, through: :photo_sessions


  has_secure_password
end
