class Photo < ApplicationRecord
  belongs_to :photographer
  belongs_to :tag


  def profileURL
    self.photographer.custom_url
  end
end
