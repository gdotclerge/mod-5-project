class CreatePhotoSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :photo_sessions do |t|
      t.string :notes
      t.datetime :date
      t.boolean :reserved, default: false
      t.belongs_to :user
      t.belongs_to :photographer

      t.timestamps
    end
  end
end
