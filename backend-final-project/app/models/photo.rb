class Photo < ApplicationRecord
  belongs_to :photographer
  belongs_to :tag
end
