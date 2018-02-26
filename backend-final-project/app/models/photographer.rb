class Photographer < ApplicationRecord
  has_many :packages
  has_many :photos

  has_secure_password
end
