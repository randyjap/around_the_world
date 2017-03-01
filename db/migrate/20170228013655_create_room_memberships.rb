class CreateRoomMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :room_memberships do |t|
      t.integer :room_id, null: false
      t.integer :guest_id, null: false
      t.timestamps null: false
    end
    add_index :room_memberships, :room_id
    add_index :room_memberships, :guest_id
  end
end
