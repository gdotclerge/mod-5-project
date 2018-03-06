class Photo < ApplicationRecord
  belongs_to :photographer
  belongs_to :tag


  def profileURL
    self.photographer.custom_url
  end

  def photoUser
    self.photographer.username
  end
end
