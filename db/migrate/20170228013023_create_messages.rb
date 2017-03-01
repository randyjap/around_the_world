class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :room_id, null: false
      t.text :message, null: false
      t.timestamps null: false
    end
    add_index :messages, :author_id
    add_index :messages, :room_id
  end
end
