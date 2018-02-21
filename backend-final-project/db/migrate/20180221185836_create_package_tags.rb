class CreatePackageTags < ActiveRecord::Migration[5.1]
  def change
    create_table :package_tags do |t|
      t.belongs_to :package
      t.belongs_to :tag


      t.timestamps
    end
  end
end
