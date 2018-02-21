class PhotoTag < ApplicationRecord
  belongs_to :tag
  belongs_to :photo
end
