class PackageSerializer < ActiveModel::Serializer
  attributes :id, :price, :hours

  has_many :tags
end
