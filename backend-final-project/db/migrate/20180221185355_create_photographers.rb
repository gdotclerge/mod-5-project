class CreatePhotographers < ActiveRecord::Migration[5.1]
  def change
    create_table :photographers do |t|
      t.string :username
      t.string :password_digest
      t.string :website
      t.string :profile_photo
      t.string :instagram_url
      t.string :facebook_url

      t.timestamps
    end
  end
end
