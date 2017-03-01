class Message < ApplicationRecord
  validates :author, :room, :body, presence: true

  belongs_to :author, class_name: "User"
  belongs_to :room

  after_commit { BroadcastMessageJob.perform_later(self) }
end
