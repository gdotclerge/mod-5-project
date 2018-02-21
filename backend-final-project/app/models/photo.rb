class Photo < ApplicationRecord
  belongs_to :photographer
  has_many :photo_tags
  has_many :tags, through: :photo_tags
end
