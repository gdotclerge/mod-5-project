class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :img_src, :img_size, :profileURL

  belongs_to :tag
end
