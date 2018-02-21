class Package < ApplicationRecord
  belongs_to :photographer
  has_many :package_tags
  has_many :tags, through: :package_tags
end
