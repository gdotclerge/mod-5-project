class PhotoSessionSerializer < ActiveModel::Serializer
  attributes :id, :session_type, :start_date, :end_date, :address, :city, :state, :zip, :additional_notes, :reserved, :price, :hours, :min_photos, :max_photos

  belongs_to :photographer
end
