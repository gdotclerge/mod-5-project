class PackageSerializer < ActiveModel::Serializer
  attributes :id, :price, :hours, :photos_to_deliver

  has_many :tags
end
