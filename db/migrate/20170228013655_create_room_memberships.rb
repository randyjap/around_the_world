class CreateRoomMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :room_memberships do |t|
      t.integer :member_id, null: false
      t.integer :guest_id, null: false
    end
    add_index :room_memberships, :member_id
    add_index :room_memberships, :guest_id
  end
end
