class User < ApplicationRecord
  has_many :photo_sessions
  has_many :photographers, through: :photo_sessions
end
