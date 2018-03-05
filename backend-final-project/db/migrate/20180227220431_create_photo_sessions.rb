class CreatePhotoSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :photo_sessions do |t|
      t.string :session_type
      t.datetime :start_date
      t.datetime :end_date
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :additional_notes
      t.boolean :reserved, default: false
      t.belongs_to :user
      t.belongs_to :photographer
      t.float :price
      t.integer :hours
      t.integer :min_photos
      t.integer :max_photos

      t.timestamps
    end
  end
end
