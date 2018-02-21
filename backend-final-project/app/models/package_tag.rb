class PackageTag < ApplicationRecord
  belongs_to :tag
  belongs_to :package
end
