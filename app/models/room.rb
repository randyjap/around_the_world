class Room < ApplicationRecord
  validates :name, :moderator, presence: true
  validates :name, uniqueness: true

  belongs_to :moderator, class_name: "User"
  has_many :room_memberships
  has_many :guests, through: :room_memberships
  has_many :messages

  after_commit { BroadcastRoomJob.perform_later(self) }
end
