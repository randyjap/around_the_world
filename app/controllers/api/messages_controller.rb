class Api::MessagesController < ApplicationController
  def index
    room = Room.find_by(name: params[:room])
    @messages = Message.where(room: room).includes(:author)
  end

  def create
    user = User.first
    room = Room.find_by(name: params[:room])
    body = params[:body]
    @message = Message.new(author: user, room: room, body: body)
    if @message.save
      render json: @message, status: 200
    else
      render json: @message.errors.full_messages, status: 422
    end
  end
end
