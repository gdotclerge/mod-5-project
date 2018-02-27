class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :img_src, :img_size, :photographer_id

  belongs_to :tag
end
