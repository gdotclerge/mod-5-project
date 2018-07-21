class CreatePackages < ActiveRecord::Migration[5.1]
  def change
    create_table :packages do |t|
      t.belongs_to :photographer
      t.float :price
      t.float :hours
      t.integer :min_photos
      t.integer :max_photos
      t.string :notes

      t.timestamps
    end
  end
end



# add turn around time for photos 5 - 7 business day Examples
# additional notes travel fee applied
# min number of photos delivered
# max number of photos to deliver
