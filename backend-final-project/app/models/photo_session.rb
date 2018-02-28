class PhotoSession < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :photographer


end
