class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :img_src, :img_size
end
