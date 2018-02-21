class PackageSerializer < ActiveModel::Serializer
  attributes :id, :price, :hours, :photos_to_deliver


  belongs_to :photographer
end
