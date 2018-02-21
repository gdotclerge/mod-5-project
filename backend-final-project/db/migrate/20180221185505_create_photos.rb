class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.belongs_to :photographer
      t.string :img_src
      t.string :img_size

      t.timestamps
    end
  end
end
