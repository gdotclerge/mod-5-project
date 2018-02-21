class CreatePhotoTags < ActiveRecord::Migration[5.1]
  def change
    create_table :photo_tags do |t|
      t.belongs_to :photo
      t.belongs_to :tag

      t.timestamps
    end
  end
end
