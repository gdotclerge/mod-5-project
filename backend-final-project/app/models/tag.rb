class Tag < ApplicationRecord
  has_many :package_tags
  has_many :photo_tags
end
