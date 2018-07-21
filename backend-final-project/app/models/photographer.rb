class Photographer < ApplicationRecord
  has_many :packages
  has_many :photos
  has_many :photo_sessions
  has_many :users, through: :photo_sessions


  has_secure_password


  def booked_photo_sessions
    self.photo_sessions.select { |ps| ps.reserved === true }
  end

  def open_photo_sessions
    self.photo_sessions.select { |ps| ps.reserved === false }
  end


end
