class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :img_src, :img_size, :profileURL, :photoUser

  belongs_to :tag
end
