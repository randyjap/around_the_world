class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false
      t.integer :moderator_id, null: false
      t.timestamps null: false
    end
    add_index :rooms, :moderator_id
  end
end
